"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";
import { BiEdit, BiUser } from "react-icons/bi";

export function UpdateUserModal() {
  const [base64Image, setBase64Image] = useState("");


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    
    await authClient.updateUser({
      name: name,
      image: base64Image,
    });
    
    alert("Profile Updated!");
  };

  return (
    <Modal>
      <Button variant="secondary">
        <BiEdit /> Update Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update User</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" isRequired />
                  </TextField>

                 
                  <div className="flex flex-col gap-2">
                    <Label>Upload Profile Photo</Label>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleFileChange}
                      className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                    />
                    {base64Image && (
                      <img src={base64Image} alt="Preview" className="w-16 h-16 rounded-full object-cover mt-2 border" />
                    )}
                  </div>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">Save</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}





