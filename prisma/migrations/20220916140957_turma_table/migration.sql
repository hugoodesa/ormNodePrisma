-- CreateTable
CREATE TABLE "turmas" (
    "id" SERIAL NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "docente_id" INTEGER NOT NULL,
    "nivel_id" INTEGER NOT NULL,

    CONSTRAINT "turmas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "turmas" ADD CONSTRAINT "turmas_docente_id_fkey" FOREIGN KEY ("docente_id") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turmas" ADD CONSTRAINT "turmas_nivel_id_fkey" FOREIGN KEY ("nivel_id") REFERENCES "niveis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
