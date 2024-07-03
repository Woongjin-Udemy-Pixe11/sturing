'use server';
import { Tmatching } from '@/app/(JH)/matching/_components/ClientMatching';
import connectDB from '@/lib/db';
import { Matching } from '@/lib/schemas/matching-schema';
import { redirect } from 'next/navigation';

export async function fetchMatching() {
  connectDB();
  const matchingInfo = await Matching.find({});
  return matchingInfo;
}

export async function InsertMatchingDB(state: Tmatching) {
  connectDB();
  const newMatching = new Matching(state);
  console.log(newMatching);
  await newMatching.save();
}
