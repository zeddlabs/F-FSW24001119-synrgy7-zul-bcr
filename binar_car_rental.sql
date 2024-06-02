-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               PostgreSQL 16.3, compiled by Visual C++ build 1938, 64-bit
-- Server OS:                    
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for function public.on_update_timestamp
DELIMITER //
CREATE FUNCTION "on_update_timestamp"() RETURNS UNKNOWN AS $$ 
      BEGIN
        NEW.updated_at = now();
        RETURN NEW;
      END;
     $$//
DELIMITER ;

-- Dumping structure for table public.cars
CREATE TABLE IF NOT EXISTS "cars" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''cars_id_seq''::regclass)',
	"name" VARCHAR(255) NOT NULL,
	"rent_per_day" INTEGER NOT NULL,
	"size_id" INTEGER NOT NULL,
	"image" VARCHAR(255) NOT NULL,
	"start_rent" DATE NULL DEFAULT NULL,
	"finish_rent" DATE NULL DEFAULT NULL,
	"created_by" INTEGER NULL DEFAULT NULL,
	"updated_by" INTEGER NULL DEFAULT NULL,
	"deleted_by" INTEGER NULL DEFAULT NULL,
	"is_deleted" BOOLEAN NULL DEFAULT 'false',
	"created_at" TIMESTAMPTZ NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
	"updated_at" TIMESTAMPTZ NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
	PRIMARY KEY ("id"),
	CONSTRAINT "cars_size_id_foreign" FOREIGN KEY ("size_id") REFERENCES "sizes" ("id") ON UPDATE NO ACTION ON DELETE CASCADE
);

-- Dumping data for table public.cars: 4 rows
DELETE FROM "cars";
/*!40000 ALTER TABLE "cars" DISABLE KEYS */;
INSERT INTO "cars" ("id", "name", "rent_per_day", "size_id", "image", "start_rent", "finish_rent", "created_by", "updated_by", "deleted_by", "is_deleted", "created_at", "updated_at") VALUES
	(1, 'Toyota Avanza', 200000, 2, '/public/uploads/images/avanza.jpg', NULL, NULL, 1, 1, NULL, 'false', '2024-06-02 23:15:05.729917+07', '2024-06-02 23:15:05.729917+07'),
	(2, 'Daihatsu Xenia', 250000, 2, '/public/uploads/images/xenia.jpg', NULL, NULL, 1, 1, NULL, 'false', '2024-06-02 23:15:05.729917+07', '2024-06-02 23:15:05.729917+07'),
	(3, 'Honda Jazz', 300000, 1, '/public/uploads/images/jazz.png', NULL, NULL, 1, 1, NULL, 'false', '2024-06-02 23:15:05.729917+07', '2024-06-02 23:15:05.729917+07'),
	(4, 'Toyota Fortuner', 500000, 3, '/public/uploads/images/fortuner.jpg', NULL, NULL, 1, 1, NULL, 'false', '2024-06-02 23:15:05.729917+07', '2024-06-02 23:15:05.729917+07');
/*!40000 ALTER TABLE "cars" ENABLE KEYS */;

-- Dumping structure for table public.knex_migrations
CREATE TABLE IF NOT EXISTS "knex_migrations" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''knex_migrations_id_seq''::regclass)',
	"name" VARCHAR(255) NULL DEFAULT NULL,
	"batch" INTEGER NULL DEFAULT NULL,
	"migration_time" TIMESTAMPTZ NULL DEFAULT NULL,
	PRIMARY KEY ("id")
);

-- Dumping data for table public.knex_migrations: -1 rows
DELETE FROM "knex_migrations";
/*!40000 ALTER TABLE "knex_migrations" DISABLE KEYS */;
INSERT INTO "knex_migrations" ("id", "name", "batch", "migration_time") VALUES
	(5, '20240510063410_create_on_update_timestamp_procedure.ts', 1, '2024-06-02 23:14:49.104+07'),
	(6, '20240510063415_create_users_table.ts', 1, '2024-06-02 23:14:49.145+07'),
	(7, '20240510063420_create_sizes_table.ts', 1, '2024-06-02 23:14:49.154+07'),
	(8, '20240510063425_create_cars_table.ts', 1, '2024-06-02 23:14:49.17+07');
/*!40000 ALTER TABLE "knex_migrations" ENABLE KEYS */;

-- Dumping structure for table public.knex_migrations_lock
CREATE TABLE IF NOT EXISTS "knex_migrations_lock" (
	"index" INTEGER NOT NULL DEFAULT 'nextval(''knex_migrations_lock_index_seq''::regclass)',
	"is_locked" INTEGER NULL DEFAULT NULL,
	PRIMARY KEY ("index")
);

-- Dumping data for table public.knex_migrations_lock: -1 rows
DELETE FROM "knex_migrations_lock";
/*!40000 ALTER TABLE "knex_migrations_lock" DISABLE KEYS */;
INSERT INTO "knex_migrations_lock" ("index", "is_locked") VALUES
	(1, 0);
/*!40000 ALTER TABLE "knex_migrations_lock" ENABLE KEYS */;

-- Dumping structure for table public.sizes
CREATE TABLE IF NOT EXISTS "sizes" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''sizes_id_seq''::regclass)',
	"name" VARCHAR(255) NOT NULL,
	"created_at" TIMESTAMPTZ NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
	"updated_at" TIMESTAMPTZ NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
	PRIMARY KEY ("id")
);

-- Dumping data for table public.sizes: 3 rows
DELETE FROM "sizes";
/*!40000 ALTER TABLE "sizes" DISABLE KEYS */;
INSERT INTO "sizes" ("id", "name", "created_at", "updated_at") VALUES
	(1, 'Small', '2024-06-02 23:15:05.726016+07', '2024-06-02 23:15:05.726016+07'),
	(2, 'Medium', '2024-06-02 23:15:05.726016+07', '2024-06-02 23:15:05.726016+07'),
	(3, 'Large', '2024-06-02 23:15:05.726016+07', '2024-06-02 23:15:05.726016+07');
/*!40000 ALTER TABLE "sizes" ENABLE KEYS */;

-- Dumping structure for table public.users
CREATE TABLE IF NOT EXISTS "users" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''users_id_seq''::regclass)',
	"name" VARCHAR(255) NOT NULL,
	"email" VARCHAR(255) NOT NULL,
	"password" VARCHAR(255) NOT NULL,
	"role" VARCHAR(255) NOT NULL,
	"avatar" VARCHAR(255) NULL DEFAULT NULL,
	"created_at" TIMESTAMPTZ NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
	"updated_at" TIMESTAMPTZ NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
	PRIMARY KEY ("id")
);

-- Dumping data for table public.users: 1 rows
DELETE FROM "users";
/*!40000 ALTER TABLE "users" DISABLE KEYS */;
INSERT INTO "users" ("id", "name", "email", "password", "role", "avatar", "created_at", "updated_at") VALUES
	(1, 'Super Admin', 'admin@bcr.com', '$2a$10$JCbkd/bm3bd3Dp9e31i4j.69yr7u365GhDnH/khrCEvFnpXHHdeQy', 'Super Admin', NULL, '2024-06-02 23:15:05.720222+07', '2024-06-02 23:15:05.720222+07');
/*!40000 ALTER TABLE "users" ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
