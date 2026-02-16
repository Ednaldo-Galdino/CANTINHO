// Script para deletar todas as questões e repopular com respostas randomizadas
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ctulrqzeiulzjnzbtwfk.supabase.co';
const supabaseKey = 'sb_publishable_gsF2PaqLv5RmorIAa6iLag_BF4Io3xr';
const supabase = createClient(supabaseUrl, supabaseKey);

async function clearAndRepopulate() {
    console.log('🗑️  Deletando questões antigas...\n');

    // Deletar todas as questões
    const { error: deleteError } = await supabase
        .from('questions')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000'); // Deleta todas (condição sempre verdadeira)

    if (deleteError) {
        console.error('❌ Erro ao deletar:', deleteError.message);
        return;
    }

    console.log('✅ Questões antigas deletadas!\n');
    console.log('🚀 Executando populate_all_subjects.mjs...\n');
}

clearAndRepopulate();
