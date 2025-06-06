import {Link} from 'react-router';
import {Button} from '@/common/components/@radix-ui/button';

const GameError = () => {
    return (
        <div className='min-h-screen bg-background'>
            <div className='container px-4 py-8 flex flex-col items-center justify-center min-h-[50vh]'>
                <h2 className='text-2xl font-bold mb-4'>Game not found</h2>
                <p className='text-muted-foreground mb-6'>The game you're looking for doesn't exist or has been
                    removed.</p>
                <Button asChild>
                    <Link to='/'>Back to Home</Link>
                </Button>
            </div>
        </div>
    );
};

export default GameError;
