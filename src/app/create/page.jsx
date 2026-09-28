'use client';

import FormModal from '@/components/Modal';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function CreatePage() {
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const handleSubmiit = async (values) => {
        setLoading(true);

        try {
            await axios.post('/api/series', values);
            setOpenModal(false);
            toast.success('Série adicionada com sucesso!', { id: 'create' });
        } catch (error) {
            toast.error('Erro ao adicionar série!', { id: 'create' });
            console.error('Erro ao adicionar série:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main>
        <h2>Post - Create</h2>

        <p>
            O navegador envia o JSON (modal) para /api/series (nosso route.js); o servidor
            cria a série na API externa.
        </p>

        <p>Abra o DevTools → Network → series → Payload: os dados enviados, sem x-api-key.</p>

        <button type="button" onClick={() => setOpenModal(true)} style={{ marginBottom: '1rem', padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' ,  transition: 'background-color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#45a049'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}>
            Nova série
        </button>
        <FormModal
            openModal={openModal}
            confirmLoading={loading}
            onSubmit={handleSubmiit}
            onCancel={() => setOpenModal(false)}
        />
        </main>
    );
}