'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function Ismatching({
  session,
  data,
}: {
  session: any;
  data: any;
}) {
  useEffect(() => {
    if (session && data) {
      let token = localStorage.getItem('token');

      if (token === null) {
        localStorage.setItem('token', session.user.accessToken);
        redirect('/matching');
      }

      if (token !== session.user.accessToken) {
        localStorage.setItem('token', session.user.accessToken);
        if (data.matchinginfo === null) {
          redirect('/matching');
        }
      }
    }
  }, [session, data]);

  return null;
}
