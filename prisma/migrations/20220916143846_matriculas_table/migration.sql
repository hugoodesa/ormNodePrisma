-- CreateTable
CREATE TABLE "Matriculas" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "estudante_id" INTEGER NOT NULL,
    "turma_id" INTEGER NOT NULL,

    CONSTRAINT "Matriculas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Matriculas" ADD CONSTRAINT "Matriculas_estudante_id_fkey" FOREIGN KEY ("estudante_id") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matriculas" ADD CONSTRAINT "Matriculas_turma_id_fkey" FOREIGN KEY ("turma_id") REFERENCES "turmas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
