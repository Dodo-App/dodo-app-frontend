import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dodo/')({
  component: () => <div>Hello /dodo/!</div>,
});
