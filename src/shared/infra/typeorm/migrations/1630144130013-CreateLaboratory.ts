import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLaboratory1630144130013 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'laboratory',
                columns: [
                    {name: 'id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment'},
                    {name: 'name', type: 'varchar', isNullable: false},
                    {name: 'address', type: 'varchar', isNullable: false},
                    {name: 'status', type: 'enum', enum: ['ativo', 'inativo'], isNullable: false},
                    {name: 'created_at', type: 'timestamp', default: 'now()'},
                    {name: 'updated_at', type: 'timestamp', default: 'now()'}
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('laboratory')
    }

}
