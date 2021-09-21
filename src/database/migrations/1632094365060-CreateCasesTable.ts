import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateCasesTable1632094365060 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'cases',
      columns: [
        {
          name: 'id',
          type: 'int',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true
        },
        {
          name: 'title',
          type: 'varchar'
        },
        {
          name: 'description',
          type: 'text'
        },
        {
          name: 'amount',
          type: 'int'
        },
        {
          name: 'ongID',
          type: 'int'
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }))

    await queryRunner.createForeignKey(
      'cases',
      new TableForeignKey({
        name: 'FK_Cases_Ongs',
        columnNames: ['ongID'],
        referencedColumnNames: ['id'],
        referencedTableName: 'ongs',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cases')
  }
}
