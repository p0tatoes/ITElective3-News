-- CreateTable
CREATE TABLE "News" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "upload_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revise_date" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "News_id_key" ON "News"("id");
