import { createClient } from "@supabase/supabase-js";

export const basePath = '/new-uaeyfc-site';
export const staging = process.env.NEXT_PUBLIC_STAGING;
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL ?? '', process.env.NEXT_PUBLIC_SUPABASE_KEY ?? '');