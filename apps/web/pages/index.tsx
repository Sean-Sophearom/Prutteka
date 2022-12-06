import { Button, ButtonCategory, ButtonLink } from 'ui';

export default function Web() {
  return (
    <div className="my-20 flex flex-col items-center justify-center space-y-8">
      <h1 className="text-2xl text-gray-900">Web</h1>
      <Button varaint="secondary">Login</Button>
      <ButtonCategory isActive>Recently</ButtonCategory>
      <ButtonLink href="https://www.facebook.com/" varaint="secondary">
        Link
      </ButtonLink>
    </div>
  );
}
