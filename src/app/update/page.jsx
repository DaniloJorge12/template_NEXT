import { Button } from 'antd';
import Link from 'next/link';
export default function UpdatePlaceHolder() {
    return (
        <main>
            <h1>Update</h1>
            <p>Esta página é apenas um placeholder para a rota /update.</p>
            <p>Você pode implementar a lógica de atualização de séries aqui.</p>
            <Link href='read'>
                <Button type='primary'>Ir para Get - Read</Button>
            </Link>
        </main>
    );
}
