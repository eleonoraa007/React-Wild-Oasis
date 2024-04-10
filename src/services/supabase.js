import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://aebvucxpsxdvivynqddi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlYnZ1Y3hwc3hkdml2eW5xZGRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNDE4NzUsImV4cCI6MjAyNzcxNzg3NX0.8XFMOyVqdMwNtYY8ChRbNJeRoyMJaVdvbkeDZjNIVJ8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
