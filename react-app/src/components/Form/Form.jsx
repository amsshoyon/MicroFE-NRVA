import React from "react";
import { Button } from "../ButtonComponents";
import { Input, Label } from "../FormComponents";
import { Box } from "../LayoutComponents";

const Form = () => {
	return (
		<div className="w-full">
            <Box className={'mb-6'}>
                <form>
                    <div className="mb-4">
                        <Label>Name: </Label>
                        <Input />
                    </div>
                    <div className="mb-4">
                        <Label>Date of birth: </Label>
                        <Input type="date" />
                    </div>
                    <div className="mb-4">
                        <Label>Email: </Label>
                        <Input type="email" />
                    </div>
                    <div className="mb-4">
                        <Label>Password: </Label>
                        <Input type="password" />
                    </div>

                    <Button type='submit'>Submit</Button>
                </form>
            </Box>
			<Box className="hidden">
				<table class="table-auto w-full">
					<tbody>
						<tr>
							<td class="border px-4 py-2">Name</td>
							<td class="border px-4 py-2">Abdullah Al Mamun</td>
						</tr>
						<tr>
							<td class="border px-4 py-2">Date of birth</td>
							<td class="border px-4 py-2">09-11-1994</td>
						</tr>
						<tr>
							<td class="border px-4 py-2">Email</td>
							<td class="border px-4 py-2">shoyon@sheba.xyz</td>
						</tr>
					</tbody>
				</table>
			</Box>
		</div>
	);
};

export default Form;
