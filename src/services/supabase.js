/*
* This file contains the Supabase client.
* Establishes a connection to the Supabase database.
*
* @author James M Kambanga
* Date: April 1, 2024,
* Copyright (C) 2024 Newcastle University, UK
* */

import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://qmzeluhjfntrciortddy.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtemVsdWhqZm50cmNpb3J0ZGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1NTU5NzMsImV4cCI6MjAyNzEzMTk3M30.YYZyp4JEOHjP6-PKNJBufFGGW5b5P6Eq0G1p2Ua6uSk";
const supabase = createClient(supabaseUrl, supabaseKey);

export const supabase2 = createClient(supabaseUrl, supabaseKey, {
    auth: {
        storageKey: "s1"
    }
});

export default supabase;