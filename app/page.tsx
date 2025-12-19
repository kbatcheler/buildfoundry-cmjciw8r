import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">Welcome to Chatbot Web App</h1>
        <p className="mt-4 text-lg text-gray-500">Effortlessly interact with our modern chatbot and find answers instantly.</p>
      </motion.div>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} variant="outline">
        Toggle Theme
      </Button>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Chat Interface</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our AI-powered chatbot answers your queries quickly and efficiently.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Find answers to frequently asked questions instantly.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Need more help? Reach out to us via our contact form.</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}