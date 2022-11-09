import { Form, useLoaderData, redirect, useNavigate } from 'react-router-dom';
import { updateContact } from '../module/contacts';

export const action = async ({request, params}) => {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId,updates);
    return redirect(`/contacts/${params.contactId}`);
}
const EditContact = () => {
    const contact = useLoaderData();
    const navigate = useNavigate();

    const cancelContact = () => {
        navigate(-1);
    }
    return (
        <Form method='post' id='contact-form'>
            <p>
                <span>Name</span>
                <input
                    placeholder="First"
                    aria-label="First name"
                    type="text"
                    name="first"
                    defaultValue={contact.first}
                />
                <input
                    placeholder="Last"
                    aria-label="Last name"
                    type="text"
                    name="last"
                    defaultValue={contact.last}
                />
            </p>
            <label>
                <span>Twitter</span>
                <input
                    type="text"
                    name="twitter"
                    placeholder="@jack"
                    defaultValue={contact.twitter}
                />
            </label>
            <label>
                <span>Avatar URL</span>
                <input
                    placeholder="https://example.com/avatar.jpg"
                    aria-label="Avatar URL"
                    type="text"
                    name="avatar"
                    defaultValue={contact.avatar}
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea
                    name="notes"
                    defaultValue={contact.notes}
                    rows={6}
                />
            </label>
            <label>
                <span>ID</span>
                <input
                    aria-label="Contact ID"
                    type="text"
                    name="id"
                    defaultValue={contact.id}
                    disabled
                />
            </label>
            <p>
                <button type="submit">Save</button>
                <button type="button" onClick={cancelContact}>Cancel</button>
            </p>
        </Form>
    )
}

export default EditContact;