import { Link } from 'react-router';
import { AlertCircle, Home } from 'lucide-react';
import { Button } from '../components/ui/button';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <AlertCircle className="w-20 h-20 text-gray-300 mb-6" />
      <h1 className="text-4xl font-bold text-gray-900 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you're looking for doesn't exist. Please check the URL or return to the homepage.
      </p>
      <Link to="/">
        <Button style={{ backgroundColor: '#c33531' }}>
          <Home className="w-4 h-4 mr-2" />
          Go to Homepage
        </Button>
      </Link>
    </div>
  );
}
