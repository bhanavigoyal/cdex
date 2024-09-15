# Centralized-Decentralized Exchange (CDEX)

CDEX is a platform that combines centralized and decentralized exchange features, enabling users to swap and transact tokens with ease. This project allows users to sign in using Google, manage cryptocurrency wallets, and perform asset swaps directly on the blockchain.

## Features

- **Google Sign-In**: Seamless user authentication with Google.
- **Wallet Management**: Users can create and manage cryptocurrency wallets.
- **Token Swaps**: Perform decentralized swaps of assets like SOL, USDT, and USDC.
- **User-Friendly Interface**: Intuitive and responsive UI for managing and swapping assets.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Express.js, Prisma
- **Blockchain**: web3.js
- **Database**: PostgreSQL
- **Authentication**: NextAuth for Google sign-in

## Installation

To set up the development environment, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/cdex.git
   cd cdex
    ```
2. **Clone the Repository**
   ```bash
   npm install
   # or
   yarn install
    ```
3. **Set Up Environmental Variables**
Create a `.env` file in the root directory and add the following environment variables:

    ```env
    DATABASE_URL=your_database_url
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    ```

4. **Run migrations**
   Apply database migrations using Prisma:

    ```bash
    npx prisma migrate dev
    ```

5. **Start Development Server**
   ```bash
    npm run dev
    # or
    yarn dev
    ```
## Usage

1. **Sign In**: Use Google authentication to sign in to the platform.

2. **Create Wallet**: Generate and manage your cryptocurrency wallets. 

3. **Swap Tokens**: Perform swaps between assets like SOL, USDT, and USDC.

4. **View Transactions**: Track your transaction history and wallet balances.


## Deployment

To deploy the application, follow these steps:

1. **Build the Application**

   ```bash
   npm run build
   # or
   yarn build
    ```
2. **Deploy to a Hosting Service**

   You can deploy the built application to a service like Vercel, AWS Amplify, or any other hosting provider of your choice. Follow the hosting service's documentation for deployment procedures.
