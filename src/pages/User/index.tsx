import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ShadcnUI/accordion';
import { signOut } from 'supertokens-auth-react/recipe/session';
import { Button } from '@/components/ShadcnUI/button';
import { redirectToAuth } from 'supertokens-auth-react';

export const User = () => {
  // TODO: Extract to a hook e.g. useSession, useLogin, useLogout
  const onLogout = async () => {
    await signOut();
    redirectToAuth();
  };

  //TODO: Mimic the react query from Coati, including query key, and hook structures, authentication (?), etc. And we're gonna use fetch or axios?
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is this app?</AccordionTrigger>
          <AccordionContent>
            This is a app that can help you record every event in your
            baby&apos;s life
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button onClick={onLogout}>Logout</Button>
    </div>
  );
};
