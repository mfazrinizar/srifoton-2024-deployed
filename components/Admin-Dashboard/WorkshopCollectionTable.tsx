// components/Admin-Dashboard/WorkshopCollectionTable.tsx

"use client";

import React, { useState, useEffect } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { db } from '@/lib/firebase';
import useWorkshop from '@/hooks/useWorkshop';
import { Button } from '../ui/button';
import ExportCSVButton from './ExportCSVButton';
import useAuthOrNullRedirect from '@/hooks/useAuthOrNullRedirect';
import useAdminPermissionDenied from '@/hooks/useAdminPermissionDenied';

interface SingleEntry {
  id?: string;
  type: string;
  name: string;
  proof?: string;
  is_verified: boolean;
  payment_method: string;
  date: Timestamp;
}

const WorkshopCollectionTable: React.FC = () => {
  useAuthOrNullRedirect(true);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [verifying, setVerifying] = useState<string | null>(null);
  const [currentData, setCurrentData] = useState<any[]>([]);
  const [items, setItems] = useState<SingleEntry[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const itemsPerPage = 10;
  const { workshops, loading: wsLoading, error: wsError } = useWorkshop();

  useAdminPermissionDenied(wsError === 'permission-denied');

  const transformEntry = (entry: any): SingleEntry => ({
    id: entry.id,
    type: entry.type,
    name: entry.name,
    proof: entry.proof,
    is_verified: entry.is_verified,
    payment_method: entry.payment_method,
    date: entry.date
  });

  const handleVerify = async (id: string) => {
    setVerifying(id);
    const entryDoc = doc(db, 'workshops', id);
    await updateDoc(entryDoc, { is_verified: true });

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, is_verified: true } : item
      )
    );

    setCurrentData(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, is_verified: true } : item
      )
    );

    setVerifying(null);
  };

  useEffect(() => {
    if (!loaded && !wsLoading) {
      const data = workshops.map(transformEntry);
      if (data.length > 0) {
        setItems(data);
        setCurrentData(data);
        setLoaded(true);
      }
    }
  }, [loaded, wsLoading, workshops]);

  const filteredEntries = items.filter((entry: SingleEntry) => entry.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const totalPages = Math.ceil(filteredEntries.length / itemsPerPage);
  const paginatedEntries = filteredEntries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  return (
    <div className="p-4 text-primary">
      <h3 className="admin-section border-b-2 border-gray-300 z-30 text-primary bg-background px-4 font-monument text-xl uppercase lg:text-2xl xl:px-6 xl:text-3xl">Workshops</h3>
      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border border-input rounded"
      />
      {loading ? (
        <div className="spinner-container">
          <div className="spinner-loading"></div>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto mb-4">
            <table className="w-full mb-4 border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2 text-center">Type</th>
                  <th className="p-2 text-center">Name</th>
                  <th className="p-2 text-center">Proof</th>
                  <th className="p-2 text-center">Date</th>
                  <th className="p-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedEntries.map((entry: SingleEntry) => (
                  <tr key={entry.id} className="border-b">
                    <td className="p-2 text-center">{entry.type}</td>
                    <td className="p-2 text-center">{entry.name}</td>
                    <td className="p-2 text-center"><a href={entry.proof} className="text-blue-500 underline">{entry.payment_method}</a></td>
                    <td className="p-2 text-center">
                      {entry.date.toDate().toLocaleString()}
                    </td>
                    <td className="p-2 text-center text-primary">
                      {entry.is_verified ? 'Verified' : (
                        <Button
                          onClick={() => {
                            if (window.confirm(`Are you sure to verify ${entry.name}?`)) {
                              handleVerify(entry.id as string);
                            }
                          }}
                          disabled={verifying === entry.id}
                          className="p-2 bg-secondary text-secondary-foreground rounded"
                        >
                          {verifying === entry.id ? <div className="spinner"></div> : 'Verify'}
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="space-x-4 mb-4 md:mb-1">
              <ExportCSVButton data={currentData} collectionName="Workshop" />
            </div>
            <div className="space-x-2">
              <Button
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 bg-muted text-muted-foreground rounded disabled:opacity-50"
              >
                Previous
              </Button>
              <span className="hidden sm:inline">
                Showing {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, filteredEntries.length)} of {filteredEntries.length} entries
              </span>
              <span>({currentPage} / {totalPages})</span>
              <Button
                onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 bg-muted text-muted-foreground rounded disabled:opacity-50"
              >
                Next
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WorkshopCollectionTable;
