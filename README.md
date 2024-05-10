# Dyson Media Mapper Web 

## Running the project into your local machine
* Ensure your PC has Node.js v20 or higher installed
* Unzip the project folder
* Open the project folder in command or any IDE 
* Install the required dependencies by running the following command: npm install
* Type the following command to run the application: npm run dev
* Copy the url shown and paste it to your browser to open the application

Note: The application uses the online database, so you'll need to be connected to the internet to be able to access it

## **Testing Accounts:**
Admin: 
Email: admin@example.com
Password: team2024
Team Leader:
Email: htr@exmple.com
Password: 12345678
Team Member: 
Email: cindy@987.com
Password: team2024


## Libraries and Packages
Frontend Library: React 18.2.0
Styling: Tailwind CSS 3.4.1
Error Boundaries (error when rendering components): react-error-boundary
Date Picker: flatpickr
Notification:  react-hot-toast
Form:  react-hook-form
Dates:  date-fns
Remote State Management: TanStack/React Query Library
Testing: React Testing Library


## Project Structure

```
└── 📁src
    └── App.jsx
    └── 📁assets
    └── 📁features
        └── 📁auth
            └── ChangePassword.jsx
            └── LoginForm.jsx
            └── NewPassword.jsx
            └── ResetPassword.jsx
        └── 📁bookings
            └── LocationItem.jsx
            └── PickupLocationList.jsx
            └── PickupLocationRow.jsx
            └── PickupLocations.jsx
            └── PickupLocationsForm.jsx
            └── ProductRequests.jsx
            └── RequestForm.jsx
            └── 📁hooks
                └── useAddPickupLocation.js
                └── useCreateBooking.js
                └── useDeletePickupLocation.js
                └── useEditPickupLocation.js
                └── useGetPickupLocations.js
        └── 📁dashboard
            └── DashboardBox.jsx
            └── MonthlyUsers-chart.jsx
            └── UpcomingEvent-chart.jsx
            └── UserActivity-chart.jsx
        └── 📁events
            └── AddEVent.jsx
            └── Calendar.jsx
            └── EventDetails.jsx
            └── EventForm.jsx
            └── EventItem.jsx
            └── Eventlist.jsx
            └── Homepagevid.mp4
            └── 📁hooks
                └── useAddEvent.js
                └── useEditEvent.js
                └── useGetAllEvents.js
                └── useGetEvent.js
                └── useGetTeamEvents.js
        └── 📁products
            └── AddProduct.jsx
            └── Categories.jsx
            └── CategoryForm.jsx
            └── ProductForm.jsx
            └── ProductRow.jsx
            └── Stock.jsx
            └── 📁hooks
                └── useAddCategory.js
                └── useAddProduct.js
                └── useDeleteCategory.js
                └── useDeleteProduct.js
                └── useEditCategory.js
                └── useEditProduct.js
                └── useGetCategories.js
                └── useGetProducts.js
        └── 📁reports
            └── CustomerReports.jsx
            └── EventReports.jsx
            └── ProductReports.jsx
            └── TeamReports.jsx
        └── 📁settings
            └── Administration.jsx
        └── 📁teams
            └── AddTeam.jsx
            └── LeaderForm.jsx
            └── TeamDetails.jsx
            └── TeamList.jsx
            └── UserListItem.jsx
            └── 📁hooks
                └── useAddTeam.js
                └── useGetAllTeams.js
                └── useGetTeamById.js
                └── useGetTeamByLeader.js
                └── useGetTeamMembers.js
                └── useGetUnassignedUsers.js
                └── useUpdateTeam.js
        └── 📁users
            └── CreateUser.jsx
            └── UpdateUserForm.jsx
            └── UserForm.jsx
            └── UserList.jsx
            └── UserRow.jsx
            └── 📁hooks
                └── useRoles.js
                └── useUpdateUserTeam.js
    └── 📁hooks
        └── useClickOutsideEsc.js
        └── useColorMode.js
        └── useEsc.js
        └── useFilePreview.js
        └── useLocalStorage.js
        └── useOutsideClick.js
    └── 📁layout
        └── AppLayout.jsx
        └── 📁header
            └── DarkModeSwitcher.jsx
            └── DropDownMessage.jsx
            └── DropDownNotification.jsx
            └── DropDownUser.jsx
            └── Index.jsx
        └── 📁sidebar
            └── Index.jsx
            └── SideBarLinkGroup.jsx
            └── useSideBar.js
    └── main.jsx
    └── 📁pages
        └── Account.jsx
        └── Bookings.jsx
        └── Dashboard.jsx
        └── Events.jsx
        └── Guests.jsx
        └── Homepage.jsx
        └── Login.jsx
        └── PageNotFound.jsx
        └── Products.jsx
        └── Reports.jsx
        └── Settings.jsx
        └── Teams.jsx
        └── Users.jsx
    └── 📁services
        └── apiAuth.js
        └── apiBookings.js
        └── apiCategories.js
        └── apiEvents.js
        └── apiPickupLocations.js
        └── apiProducts.js
        └── apiRoles.js
        └── apiTeams.js
        └── apiUser.js
        └── supabase.js
    └── 📁styles
        └── 📁additional-styles
            └── flatpickr.css
            └── utility-patterns.css
        └── index.css
        └── satoshi.css
        └── simple-datatables.css
    └── 📁ui
        └── ActionDropDownMenu.jsx
        └── Breadcrumb.jsx
        └── 📁Cards
            └── EventCard.jsx
            └── ProductRequests.jsx
        └── CustomDatePicker.jsx
        └── Empty.jsx
        └── Heading.jsx
        └── Icons.jsx
        └── PageTitle.jsx
        └── ProtectedRoute.jsx
        └── 📁buttons
            └── BackButton.jsx
            └── Button.jsx
            └── ButtonLink.jsx
            └── ButtonWithIcon.jsx
        └── 📁containers
            └── FlexContainer.jsx
            └── FlexItem.jsx
            └── GeneralContainer.jsx
            └── GridContainer.jsx
            └── GridItem.jsx
            └── Row.jsx
        └── 📁errors
            └── ErrorFallback.jsx
        └── 📁forms
            └── AddressForm.jsx
            └── DatePicker.jsx
            └── FormContainer.jsx
            └── FormInputs.jsx
            └── FormRow.jsx
            └── MinSearchBar.jsx
            └── SearchBar.jsx
        └── 📁lists
            └── AdminListItem.jsx
            └── ListItem2.jsx
        └── 📁modals
            └── ActionMenu.jsx
            └── ConfirmDelete.jsx
            └── ContextMenu.jsx
            └── Modal.jsx
            └── ModalIcons.jsx
            └── Overlay.jsx
        └── 📁spinners
            └── Spinner.jsx
            └── SpinnerMin.jsx
        └── 📁tables
            └── Table.jsx
        └── 📁tabs
            └── TabButton.jsx
            └── TabContent.jsx
            └── TabMenuContainer.jsx
```
