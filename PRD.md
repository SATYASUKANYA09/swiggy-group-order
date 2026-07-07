# PRD: Group Ordering & Split Bill Feature — Swiggy

## 1. Problem Statement
When friends, family, or coworkers want to order food together on Swiggy,
there is no way to do it from one shared session. One person ends up ordering
for everyone, pays the full amount, and then manually chases others for money
via UPI or WhatsApp. This is frustrating, error-prone, and kills the experience
of ordering together.

**Who this affects:** Friend groups, college students, and office coworkers who
regularly order food together.

---

## 2. Goals
- Reduce "one person pays for all" friction by 80%
- Get 15% of group orders (3+ people) to use the split bill feature within
  3 months of launch
- Achieve a feature satisfaction rating of 4.2/5 or above

---

## 3. User Personas

### Persona 1 — Riya, 22, College Student
- Orders with her hostel friends 4-5 times a week
- Always ends up being the one who pays and then forgets to collect money
- Wants a simple way to split the bill without awkward follow-ups
- High mobile usage, comfortable with UPI apps

### Persona 2 — Arjun, 28, Software Engineer
- Orders lunch with his team every day at the office
- Finds it annoying that someone always has to collect everyone's orders
  separately and combine them manually
- Wants everyone to add their own items so he doesn't have to play middleman
- Uses Swiggy regularly, power user

---

## 4. User Stories
1. As a group organiser, I want to create a group order session and share a
   link with friends so that everyone can add their own items independently.
2. As a group member, I want to join a group order via a link and add items
   to a shared cart so that I don't have to place a separate order.
3. As a group organiser, I want to see a real-time view of what everyone has
   added so that I know when the group is ready to place the order.
4. As a group member, I want to pay only for my own items so that I don't
   have to deal with manual reimbursements afterward.
5. As a group organiser, I want to set a time limit for adding items so that
   the order doesn't get delayed by people who take too long.

---

## 5. Feature List — MVP
- Create a group order session with a unique shareable link
- Join a group session via link (no app download required for guests)
- Individual cart — each member adds their own items
- Real-time view of the shared cart for the organiser
- Individual payment at checkout (each person pays for their own items)
- Delivery to one shared address
- Time limit setting for the organiser (e.g. "Order closes in 15 mins")

---

## 6. What We Are NOT Building
- Split of delivery charges or taxes in a complex way (kept simple: divided equally)
- Multi-address delivery (one address per group order only)
- In-app chat or messaging between group members

---

## 7. Success Metrics
- % of orders with 3+ people using group order feature (target: 15% in 3 months)
- Average group size per session (target: 3.5 members)
- Feature satisfaction rating via post-order survey (target: 4.2/5)
- Drop-off rate at the "join session" step (target: under 20%)