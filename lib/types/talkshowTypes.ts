// lib/types/talkshowTypes.ts

import { Timestamp } from "firebase/firestore";

export type Talkshow = {
    id: string;
    user_id: string;
    name: string;
    email: string;
    phone_number: string;
    type: string;
    proof: string;
    payment_method: string;
    isVerified: boolean;
    date: Timestamp;
  };