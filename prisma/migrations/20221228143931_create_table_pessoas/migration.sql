-- CreateTable
CREATE TABLE `Pessoas` (
    `id` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `Sobrenome` VARCHAR(191) NOT NULL,
    `Idade` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
