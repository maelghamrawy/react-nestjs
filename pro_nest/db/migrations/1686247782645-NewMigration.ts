import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewMigration1686247782645 implements MigrationInterface {
  name = 'NewMigration1686247782645';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "package_options_option" ("packageId" integer NOT NULL, "optionId" integer NOT NULL, CONSTRAINT "PK_4e80e0618f535193b51d04db420" PRIMARY KEY ("packageId", "optionId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_7615f61b370ea641e99811f1af" ON "package_options_option" ("packageId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_2b760f10a91485ef39b43da0be" ON "package_options_option" ("optionId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "package_options_option" ADD CONSTRAINT "FK_7615f61b370ea641e99811f1af8" FOREIGN KEY ("packageId") REFERENCES "package"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "package_options_option" ADD CONSTRAINT "FK_2b760f10a91485ef39b43da0be4" FOREIGN KEY ("optionId") REFERENCES "option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "package_options_option" DROP CONSTRAINT "FK_2b760f10a91485ef39b43da0be4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "package_options_option" DROP CONSTRAINT "FK_7615f61b370ea641e99811f1af8"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_2b760f10a91485ef39b43da0be"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_7615f61b370ea641e99811f1af"`,
    );
    await queryRunner.query(`DROP TABLE "package_options_option"`);
  }
}
