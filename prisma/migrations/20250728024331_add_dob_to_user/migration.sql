/*
  Warnings:

  - You are about to drop the column `insurance` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `ohip` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "password" TEXT NOT NULL,
    "dob" TEXT,
    "address" TEXT,
    "city" TEXT,
    "province" TEXT,
    "postalCode" TEXT,
    "ohipCard" TEXT,
    "insurance1" TEXT,
    "insurance1Back" TEXT,
    "insurance2" TEXT,
    "insurance2Back" TEXT
);
INSERT INTO "new_User" ("email", "id", "name", "password", "phone") SELECT "email", "id", "name", "password", "phone" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
