import { Page } from "components/shared/Page";
import { Statistics } from "./Statistics";
import OrdersTable from "./OrdersTable";

export default function ReportsListing() {
  return (
    <Page title="Reports Listing">
      <div className="transition-content overflow-hidden px-[--margin-x] pb-8">
        <Statistics />
        <div className="mt-5">
          <OrdersTable />
        </div>
      </div>
    </Page>
  );
}
