import { ApiProperty } from "@nestjs/swagger";

export class Test {

    @ApiProperty( {

        example: 'test name',
        description: 'This contains only test name'
    })
    name: string;
}
