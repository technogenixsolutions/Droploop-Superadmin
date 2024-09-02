import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

import { useCreateSupportTicketMutation } from '@/redux/api/supportTicketApi';

function AddsupportModal({ isOpen, close }: any) {
  const [createSupportTicket, { isLoading }] = useCreateSupportTicketMutation();
  const ticketSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    mobileNumber: z.string().optional(),
    message: z.string().min(1, 'Message is required'),
  });
  const form = useForm<z.infer<typeof ticketSchema>>({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      name: '',
      email: '',
      mobileNumber: '',
      message: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof ticketSchema>) => {
    const res = await createSupportTicket(data);
    if (res?.data?.success) {
      toast(res?.data?.message);
    }
    close();
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      {/* <DialogTrigger className="rounded bg-primary px-4 py-2 text-sm text-white">
    Publish
  </DialogTrigger> */}
      <DialogContent className="ml-2 mr-2 w-full max-w-full lg:w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-lg">Add Support</DialogTitle>
        </DialogHeader>
        <div className="rounded-lg bg-white p-4 text-center sm:p-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your mobile number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Describe your issue" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Loading...' : ' Submit Ticket'}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default AddsupportModal;
