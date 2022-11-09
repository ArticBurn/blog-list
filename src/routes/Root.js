import { Outlet, useLoaderData, Form, redirect, NavLink } from 'react-router-dom'
import { getContacts, createContact } from '../module/contacts.js';

export const action = async () => {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`)
}

export const loader = async () => {
    const contacts = await getContacts();
    return { contacts }
}
const Root = () => {
    const { contacts } = useLoaderData();
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                    <NavLink to={`contacts/${contact.id}`}
                                    className={({isActive, isPending}) => isActive ? 'active' : isPending ? 'pending' : ''}>
                                        {contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                        {contact.favorite && <span>★</span>}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                    {/* <ul>
                        <li>
                            <Link to={'/'}>Root</Link>
                        </li>
                        <li>
                            <Link to={'contacts/1'}>Your Name</Link>
                        </li>
                        <li>
                            <Link to={'contacts/2'}>Your Friend</Link>
                        </li>
                    </ul> */}
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}

export default Root;