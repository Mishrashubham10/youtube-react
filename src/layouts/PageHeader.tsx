import { Menu } from 'lucide-react';
import Button from '../components/Button';

const PageHeader = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/" className="h-6">
          Youtube
        </a>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default PageHeader;