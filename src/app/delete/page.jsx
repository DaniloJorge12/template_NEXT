import { Button } from 'antd';
import Link from 'next/link';
export default function DeletePlaceholder() {
    return (
        <main>
            <h1>Delete</h1>
            <p>Esta página é apenas um placeholder para a rota /delete.</p>
            <p>Você pode implementar a lógica de exclusão de séries aqui.</p>
            <Link href="read">
                <Button type="primary">Ir para Get - Read</Button>
            </Link>
        </main>
    );
}
