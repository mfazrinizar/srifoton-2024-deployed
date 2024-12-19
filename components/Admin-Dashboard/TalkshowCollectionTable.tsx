// components/Admin-Dashboard/TalkshowCollectionTable.tsx

"use client";

import React, { useState, useEffect, use } from 'react';
import { Timestamp } from "firebase/firestore";
import useTalkshow from '@/hooks/useTalkshow';
import { Button } from '../ui/button';
import ExportCSVButton from './ExportCSVButton';
import useAuthOrNullRedirect from '@/hooks/useAuthOrNullRedirect';
import useAdminPermissionDenied from '@/hooks/useAdminPermissionDenied';
import { generateTalkshowTicketNumberAndVerifyById } from '@/lib/network/talkshows/talkshowQueries';
import { toast } from 'sonner';

interface SingleEntry {
  id?: string;
  type: string;
  name: string;
  proof?: string;
  is_verified: boolean;
  email: string;
  payment_method: string;
  ticket_number?: string;
  date: Timestamp;
}

const TalkshowCollectionTable: React.FC = () => {
  useAuthOrNullRedirect(true);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState<any[]>([]);
  const [verifying, setVerifying] = useState<string | null>(null);
  const [items, setItems] = useState<SingleEntry[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const itemsPerPage = 10;
  const { talkshows, loading: tsLoading, error: tsError } = useTalkshow();

  useAdminPermissionDenied(tsError === 'permission-denied');

  const transformEntry = (entry: any): SingleEntry => ({
    id: entry.id,
    type: entry.type,
    name: entry.name,
    proof: entry.proof,
    is_verified: entry.is_verified,
    email: entry.email,
    payment_method: entry.payment_method,
    ticket_number: entry.ticket_number,
    date: entry.date
  });

  useEffect(() => {
    setLoading(true);
    let data: SingleEntry[] = [];

    if (!loaded && !tsLoading) {
      data = talkshows.map(transformEntry);
      if (data.length > 0) {
        setCurrentData(data);
        setItems(data);
        setLoaded(true);
      }
    }

    setLoading(false);
  }, [loaded, tsLoading, talkshows]);

  const handleVerify = async (id: string) => {
    setVerifying(id);

    let ticketNumber: string;

    try {
      ticketNumber = await generateTalkshowTicketNumberAndVerifyById(id);
    } catch (error) {
      toast.error("Gagal memverifikasi talkshow: " + error)
      setVerifying(null);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, ticket_number: ticketNumber, is_verified: true } : item
      )
    );

    setCurrentData(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, ticket_number: ticketNumber, is_verified: true } : item
      )
    );

    toast.success("Berhasil memverifikasi talkshow!");

    setVerifying(null);
  };

  useEffect(() => {
    if (!loaded && !tsLoading) {
      const data = talkshows.map(transformEntry);
      if (data.length > 0) {
        setItems(data);
        setCurrentData(data);
        setLoaded(true);
      }
    }
  }, [loaded, tsLoading, talkshows]);


  const filteredEntries = items.filter((entry: SingleEntry) => entry.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const totalPages = Math.ceil(filteredEntries.length / itemsPerPage);
  const paginatedEntries = filteredEntries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  return (
    <div className="p-4 text-primary">
      <h3 className="admin-section border-b-2 border-gray-300 z-30 text-primary bg-background px-4 font-monument text-xl uppercase lg:text-2xl xl:px-6 xl:text-3xl">Talkshows</h3>
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
                  <th className="p-2 text-center">Ticket Number</th>
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
                    <td className="p-2 text-center">{entry.ticket_number ?? "Not Verified"}</td>
                    <td className="p-2 text-center">{entry.name}</td>
                    <td className="p-2 text-center">
                      <a href={entry.proof}
                        className="text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer" >{entry.payment_method}
                      </a>
                    </td>
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
              <ExportCSVButton data={currentData} collectionName="Talkshow" />
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

export default TalkshowCollectionTable;
