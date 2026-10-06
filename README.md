# FinTrack 💰

> An advanced backend-focused financial transaction management system built with Node.js, Express.js, MongoDB, Mongoose, JWT, and Nodemailer.

FinTrack is a backend project designed to simulate the core architecture and engineering concepts behind a financial transaction system.

The project focuses on secure authentication, authorization, account management, balance management, financial transactions, transaction idempotency, ledger records, token blacklisting, secure logout, email services, and reliable database operations.

---

## 🚀 Features

### 🔐 Authentication & Authorization

- User registration
- User login
- JWT-based authentication
- Protected routes
- Authentication middleware
- Authorization checks
- Secure logout
- Token validation
- Token expiration handling
- Token blacklisting
- Blacklisted token model
- User-based account authorization

---

### 👤 User Management

- User creation
- Unique email validation
- User authentication
- User identification through JWT
- Protected user resources

---

### 🏦 Account Management

- Create financial accounts
- Associate accounts with users
- Account status management
  - Active
  - Frozen
  - Closed
- Currency management
- Account validation
- User-account relationship
- Account ownership verification

---

### 💰 Balance Management

FinTrack includes balance-related logic to ensure financial operations are performed safely.

Features include:

- Balance checking
- Insufficient balance detection
- Balance validation before transactions
- Sender balance verification
- Receiver balance updates
- Prevention of invalid negative balances

Example:

```text
Sender Account
Balance: ₹5,000

Transfer: ₹2,000

        ↓

Sender Account
Balance: ₹3,000