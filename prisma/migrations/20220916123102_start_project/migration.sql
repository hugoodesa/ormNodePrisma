-- CreateTable
CREATE TABLE "pessoas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "pessoas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "niveis" (
    "id" SERIAL NOT NULL,
    "descr_nivel" TEXT NOT NULL,

    CONSTRAINT "niveis_pkey" PRIMARY KEY ("id")
);
