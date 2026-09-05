import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eqxjzbcbvktnoratrvnk.supabase.co/rest/v1/'
const supabaseAnonKey = 'sb_publishable_HU8Ujc6E-ypf3rr37NORWw_YWE5_pyN'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
