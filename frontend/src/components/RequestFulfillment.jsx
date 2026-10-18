import '../styles/lifecycle.css';
import { formatRequestDate } from '../services/recipientDashboardApi.js';

export default function RequestFulfillment({ request }) {
  return <section className="request-fulfillment" aria-label={'Fulfillment for request '+request.request_id}>
    <div className="fulfillment-heading"><strong>{request.fulfilled_units} / {request.units_required} units fulfilled</strong><span>{request.remaining_units} remaining</span></div>
    <progress value={request.fulfilled_units} max={request.units_required} aria-label="Units fulfilled" />
    {request.history_available ? <p className="fulfillment-sources">Inventory: {request.inventory_units} units &middot; Donation: {request.donation_units} units</p>
      : <p className="fulfillment-sources">Historical fulfillment source details are unavailable.</p>}
    {request.accepted_donors.length>0 && <div className="accepted-donor-list"><h3>Accepted donors</h3><p>Coordinate through the selected hospital or blood bank. Blood donation requires the authorized medical process.</p>
      {request.accepted_donors.map(donor=><article className="accepted-donor" key={donor.donor_id}><strong>{donor.name}{donor.blood_group?' ? '+donor.blood_group:''}</strong>
        {donor.phone&&<p>Phone: {donor.phone}</p>}{donor.email&&<p>Email: {donor.email}</p>}
        <p>Screening: {donor.screening_result||'Awaiting screening'}{donor.screened_at?' - '+formatRequestDate(donor.screened_at):''}</p>
        {donor.screening_result==='Failed'&&<p>Screening failed. Another eligible donor can continue the process.</p>}
      </article>)}
    </div>}
  </section>;
}
