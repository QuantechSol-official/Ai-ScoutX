import { Page } from "components/shared/Page";

const SavedReports = () => {
  return (
    <Page title="Saved Reports">
      <div className="transition-content px-[--margin-x] pb-6">
        <div className="min-w-0 space-y-4 py-5">
          <h2 className="truncate text-xl font-medium tracking-wide text-gray-800 dark:text-dark-50">
          Saved Reports
          </h2>
        </div>
      </div>
    </Page>
  );
};

export default SavedReports;
