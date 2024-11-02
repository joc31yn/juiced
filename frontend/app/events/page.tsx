import { createClient } from '@/utils/supabase/server';
import React, {useState} from "react";
import EventPopUp from './cal_components/EventPopUp';
import Calendar from './cal_components/calendar';

export default async function Events() {
  const supabase = await createClient();
  const { data: notes } = await supabase.from("public_events").select();
  
  return (
    <div className="rounded-md border border-gray-200 px-4 py-2 shadow">
      <Calendar/>
    </div>
  );
}
/*
<pre>{JSON.stringify(notes, null, 2)}</pre>
*/
