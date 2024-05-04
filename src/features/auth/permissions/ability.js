import { defineAbility } from '@casl/ability';


export default (appRole) => defineAbility((can) => {
    // const {appRole} = useUser();

    if (appRole === 'admin') {
        can('manage', 'users');
        /*can('create', 'Comment');
        can('update', 'Comment', { authorId: user.id });*/
    }
});
