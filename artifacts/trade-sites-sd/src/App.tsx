import { type ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AboutPage, ContactPage, HomePage, NotFoundPage, ProcessPage, ServicesPage, WorkPage } from '@/pages/site-pages';
import { SiteShell } from '@/components/site-shell';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function RouteMeta({ title, children }: { title: string; children: ReactNode }) {
  useEffect(() => {
    document.title = `${title} · Trade Sites SD`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', 'Affordable one-page hire-me websites for San Diego trade workers. Built by Kevin Ibarra.');
  }, [title]);
  return <>{children}</>;
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <SiteShell>
        <Switch>
          <Route path="/"><RouteMeta title="Home"><HomePage /></RouteMeta></Route>
          <Route path="/work"><RouteMeta title="The work"><WorkPage /></RouteMeta></Route>
          <Route path="/services"><RouteMeta title="Services"><ServicesPage /></RouteMeta></Route>
          <Route path="/process"><RouteMeta title="Process"><ProcessPage /></RouteMeta></Route>
          <Route path="/about"><RouteMeta title="About Kevin"><AboutPage /></RouteMeta></Route>
          <Route path="/contact"><RouteMeta title="Contact"><ContactPage /></RouteMeta></Route>
          <Route><RouteMeta title="Not found"><NotFoundPage /></RouteMeta></Route>
        </Switch>
      </SiteShell>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
