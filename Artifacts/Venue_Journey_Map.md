from pathlib import Path

venue_analysis_md = """

# 🏟️ Venue Partner Journey — Analysis & Process Map (MVP Mock)

> Objective: Define an end-to-end **mocked** workflow for venues from **event planning** → **ticketing** → **settlement** → **retargeting**, to guide the next milestone (Venue Tools MVP) and align the hackathon team.

---

## 1) Context & Assumptions

- **Stage:** Pre-pilot. No real payments or onchain minting yet; we simulate with local data.
- **Personas:** Venue Owner/GM, Box Office Manager, Door Staff, Marketing Lead.
- **Scope:** One venue, single event flow (reusable), basic dashboard.
- **Data store (mock):** Local JSON / localStorage namespaces for events, orders, attendees, settlements.

---

## 2) Current Pain Points (Legacy Ticketing)

- High fees reduce conversion and create fan backlash.
- Weak fraud prevention and no clear anti-scalping policy.
- Poor access to first-party attendee data for remarketing.
- Post-event reconciliation is manual, slow, and opaque.

---

## 3) Target Outcomes (Unchained MVP)

- **Faster setup:** Venue can create an event in < 30 minutes.
- **Transparency:** Simple royalties & fee model (even if mocked now).
- **Data ownership:** Venue can export attendee list post-event.
- **Operational ease:** Smooth check-in and clear settlement summary.
- **Growth loop:** Audience retargeting from verified attendees.

---

## 4) Journey Stages & Process (Frontstage/Backstage)

### 4.1 Event Planning & Onboarding

**Frontstage (Venue):** Create account → Submit basic venue info → Access dashboard.
**Backstage (Platform):** Create venue profile; assign admin role; mock payout method.

**Artifacts (Mock):** `venue_profile.json` with venueId, name, contact, payoutMethod, createdAt.
**KPIs:** Time to first event created ≤ 24h.

---

### 4.2 Event Setup & Ticket Creation

**Frontstage (Venue):** New Event → Fill details → Upload poster → Add tiers (GA/VIP) → Set royalty % → Preview → Publish (mock).
**Backstage (Platform):** Persist event; generate **NFT metadata template**; validate required fields; publish flag.

**Artifacts (Mock):** `events.json` items: `{ eventId, venueId, title, datetime, location, description, posterUrl, tiers[], royaltyBps, status }`.
**KPIs:** 0% missing fields; preview render < 2s.
**Risks:** Wrong time zone; missing media → use fallbacks.

---

### 4.3 Sales Monitoring

**Frontstage (Venue):** Dashboard shows tickets sold, revenue, remaining inventory per tier.
**Backstage (Platform):** Aggregate mock orders; compute totals; expose daily sales sparkline.

**Artifacts (Mock):** `orders.json` → `{ orderId, eventId, tierId, qty, price, fees, buyerId, createdAt, status }`.
**KPIs:** Dashboard loads < 5s; data freshness = page load.
**Risks:** Partial data → show “Data is simulated” badge.

---

### 4.4 Event Day Operations

**Frontstage (Venue):** Check-in tool scans ticket → Status updates to **Checked-in**.
**Backstage (Platform):** Validate ticket (mock ownership); write check-in timestamp; increment headcount.

**Artifacts (Mock):** `checkins.json` → `{ orderId, ticketId, scannedAt, doorId, result }`.
**KPIs:** Scan success ≥ 95%; average scan < 3s.
**Risks:** No connectivity → manual override toggle (mark as checked-in).

---

### 4.5 Post-Event Settlement & Analytics

**Frontstage (Venue):** Settlement report shows gross, fees, net payout, royalties (mock). Download CSV & attendee list.
**Backstage (Platform):** Reconcile orders; compute totals by tier; include no-show rate; generate report ID.

**Artifacts (Mock):** `settlements.json` → `{ settlementId, eventId, totals:{gross, fees, net, royalties}, generatedAt }`.
**KPIs:** Payout accuracy = 100% vs. orders; report export < 5s.
**Risks:** Time period mismatches → always display report window explicitly.

---

### 4.6 Continued Engagement & Retargeting

**Frontstage (Venue):** Build audience from past attendees; send “Next Show” campaign or promo codes.
**Backstage (Platform):** Filter by attendance; dedupe emails; compute open CTAs (mock).

**Artifacts (Mock):** `audiences.json` → `{ audienceId, eventIds[], size, createdAt }`.
**KPIs:** Repeat purchase ≥ 20% from NFT holders (proxy metric in MVP).
**Risks:** GDPR/consent → require opt-in flag on export.

---

## 5) KPIs Summary

- **Setup speed:** ≤ 30 minutes to create & publish event (mock).
- **Sales visibility:** Dashboard loads < 5s, includes tier breakdown.
- **Ops reliability:** Check-in success ≥ 95% (simulated).
- **Financial clarity:** 100% reconciliation accuracy (mock).
- **Growth loop:** ≥ 20% repeat from prior attendees (tracked later).

---

## 6) Data Model (Mock) — Minimal

- **Venue:** `venueId`, `name`, `contact`, `payoutMethod`, `createdAt`
- **Event:** `eventId`, `venueId`, `title`, `datetime`, `location`, `tiers[]`, `royaltyBps`, `status`
- **Tier:** `tierId`, `name`, `price`, `inventory` (mock), `maxPerOrder`
- **Order:** `orderId`, `eventId`, `tierId`, `qty`, `price`, `fees`, `buyerId`, `status`, `createdAt`
- **CheckIn:** `ticketId`, `orderId`, `scannedAt`, `doorId`, `status`
- **Settlement:** `settlementId`, `eventId`, `totals{gross,fees,net,royalties}`, `generatedAt`
- **Audience:** `audienceId`, `eventIds[]`, `emails[] (opt-in)`, `createdAt`

> Note: In MVP all of the above are **local JSON / localStorage**; replace with real DB + chain later.

---

## 7) Risks & Mitigations

- **Scope creep (real payments/onchain):** Keep mocked; label clearly in UI.
- **Data accuracy:** Seed with test data; provide “refresh” for aggregates.
- **Time zones:** Store event `datetime` + `tz` explicitly; render local + venue time.
- **Compliance:** Add email opt-in and export disclaimer for marketing use.

---

## 8) Open Questions (Stakeholder Review)

1. Do venues require **seat maps** in MVP or is GA/VIP sufficient?
2. What’s the minimum **royalty** default for resale (e.g., 5–10%)?
3. Are payouts **onchain**, **bank transfer**, or **hybrid** (future)?
4. What data must be in the **settlement report** to satisfy finance?
5. Which **CRMs/Email tools** do venues prefer for export?

---

## 9) Next PM Deliverables

- **Venue MVP User Stories** (broken down with acceptance criteria)
- **Hackathon Sprint Plan** (issues per stage, owner, demo success check)
- **Stakeholder Deck** (diagram + KPIs + risks)

---

"""

path = Path("/mnt/data/Venue_Journey_Analysis_and_Process_Map.md")
path.write_text(venue_analysis_md)
path.name
