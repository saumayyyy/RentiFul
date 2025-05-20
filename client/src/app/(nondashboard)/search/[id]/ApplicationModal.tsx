import { CustomFormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import {
  useCheckExistingApplicationQuery,
  useCreateApplicationMutation,
  useGetAuthUserQuery,
} from "@/state/api";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  ApplicationFormData,
  applicationSchema,
} from "@/lib/schemas";
import { useRouter } from "next/navigation";



const ApplicationModal = ({
  isOpen,
  onClose,
  propertyId,
}: ApplicationModalProps) => {
  const [createApplication] = useCreateApplicationMutation();
  const { data: authUser } = useGetAuthUserQuery();
  const {
    data: existingAppCheck,
    isLoading: checking,
    isError,
  } = useCheckExistingApplicationQuery(
    { propertyId },
    { skip: !authUser || authUser.userRole !== "tenant" }
  );

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });
  const router = useRouter();
  const onSubmit = async (data: ApplicationFormData) => {
    if (!authUser || authUser.userRole !== "tenant") {
      console.error("You must be logged in as a tenant to submit an application");
      return;
    }

    await createApplication({
      ...data,
      applicationDate: new Date().toISOString(),
      status: "Pending",
      propertyId: propertyId,
      tenantCognitoId: authUser.cognitoInfo.userId,
    });

    onClose();
    router.push("/tenants/applications");
  };

  const alreadyExists = existingAppCheck?.exists;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white">
        <DialogHeader className="mb-4">
          <DialogTitle>
            {alreadyExists
              ? "Application Already Submitted"
              : "Submit Application for this Property"}
          </DialogTitle>
        </DialogHeader>

        {checking ? (
          <p className="text-center">Checking for existing application...</p>
        ) : alreadyExists ? (
          <div className="text-center text-gray-700">
            <p>You have already applied for this property.</p>
            <p>Please wait for a response before applying again.</p>
            <Button
              onClick={onClose}
              className="mt-4 bg-primary-700 text-white"
            >
              Close
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <CustomFormField
                name="name"
                label="Name"
                type="text"
                placeholder="Enter your full name"
              />
              <CustomFormField
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email address"
              />
              <CustomFormField
                name="phoneNumber"
                label="Phone Number"
                type="text"
                placeholder="Enter your phone number"
              />
              <CustomFormField
                name="message"
                label="Message (Optional)"
                type="textarea"
                placeholder="Enter any additional information"
              />
              <Button
                type="submit"
                className="bg-primary-700 text-white w-full"
              >
                Submit Application
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
