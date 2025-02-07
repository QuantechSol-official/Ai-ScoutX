import { Page } from "components/shared/Page";
// Import Dependencies
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

// Local Imports
import { schema } from "./schema";
import { Button, Card, Input } from "components/ui";
import { useState } from "react";
import { Listbox } from "components/shared/form/Listbox";

// ----------------------------------------------------------------------

const initialState = {
  productKeyword: "",
  regions: [],
  email: "",
  // cover: null,
};

const regions = [
  { id: 1, name: "Euorope" },
  { id: 2, name: "Middle East" },
  { id: 3, name: "USA" },
  { id: 4, name: "Asia Pecific" },
  { id: 5, name: "Global" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("1");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialState,
  });

  const onSubmit = (data) => {
    console.log(data);
    toast("We will send a detailed report to your email within 20-30 minutes.", {
      invert: true,
    });
    reset();
  };
  return (
    <Page title="Homepage">
      <div className="transition-content px-[--margin-x] pb-6">
        <div className="min-w-0 space-y-4 py-5">
          <h2 className="truncate text-xl font-medium tracking-wide text-gray-800 dark:text-dark-50">
            AI ScouxX
          </h2>
        </div>
        <div className="mb-5 flex gap-2">
          <Button
            className="min-w-[7rem] flex-1"
            color={activeTab === "1" ? "primary" : "info"}
            onClick={() => handleTabChange("1")}
            variant={activeTab === "1" ? "filled" : "outlined"}
          >
            New Product Search
          </Button>
          <Button
            className="min-w-[7rem] flex-1"
            color={activeTab === "2" ? "primary" : "info"}
            variant={activeTab === "2" ? "filled" : "outlined"}
            onClick={() => handleTabChange("2")}
          >
            Product Validation
          </Button>
        </div>
        {activeTab === "1" && <form
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          id="new-post-form"
        >
          <div className="grid grid-cols-12 place-content-start gap-4 sm:gap-5 lg:gap-6">
            <div className="col-span-12 lg:col-span-12">
              <Card className="p-4 sm:px-5">
                {/* <h3 className="text-base font-medium text-gray-800 dark:text-dark-100">
                  Product Keywords or Niche
                </h3> */}
                <div className="mt-5 space-y-5">
                  <Input
                    label="Product Keywords or Niche"
                    placeholder="e.g. Car Accessories, Pet Supplies"
                    {...register("productKeyword")}
                    error={errors?.productKeyword?.message}
                  />
                  <Controller
                      name="regions"
                      control={control}
                      rules={{ required: "Please select at least one region" }}
                      render={({ field }) => (
                        <Listbox
                          {...field}
                          data={regions}
                          value={field.value}
                          onChange={field.onChange}
                          displayField="name"
                          placeholder="Select Regions"
                          label="Regions"
                          multiple
                          error={errors?.regions?.message}
                        />
                      )}
                    />
                    {/* {errors?.regions && <p className="text-red-500">{errors.regions.message}</p>} */}
                  <Input
                    label="email"
                    placeholder="your@email.com"
                    {...register("email")}
                    error={errors?.email?.message}
                  />
                  <div className="inline-code max-w-2xl">
                    We&apos;ll send your detailed report to this email address
                  </div>
                  {/* <div className="flex flex-col">
                    <span>Description</span>
                    <Controller
                      control={control}
                      name="content"
                      render={({ field: { value, onChange, ...rest } }) => (
                        <TextEditor
                          value={value}
                          onChange={(val) => onChange(val)}
                          placeholder="Enter your content..."
                          className="mt-1.5 [&_.ql-editor]:max-h-80 [&_.ql-editor]:min-h-[12rem]"
                          modules={editorModules}
                          error={errors?.content?.message}
                          {...rest}
                        />
                      )}
                    />
                  </div>

                  <Controller
                    render={({ field }) => (
                      <CoverImageUpload
                        classNames={{
                          box: "mt-1.5",
                        }}
                        label="Cover Image"
                        error={errors?.cover?.message}
                        {...field}
                      />
                    )}
                    name="cover"
                    control={control}
                  /> */}
                </div>
                <div className="flex my-5">
                  <Button
                    className="min-w-[7rem] flex-1"
                    type="submit"
                    form="new-post-form"
                    color="primary"
                    variant = "filled"
                  >
                    Analyze Product
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </form>}
      </div>
    </Page>
  );
}
