import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { ReuseableLoading } from "@/components/custom/ReuseableLoading";
import { useSignInAccount } from "@/api/query/AuthQuery";
import { useAuthStore } from "@/store/auth-store";
import { useNavigate } from "react-router-dom";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

type FormFields = z.infer<typeof schema>

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const navigate = useNavigate();

    const { setUser } = useAuthStore();

    const { mutateAsync: createUser, isPending } = useSignInAccount()

    const onSubmit: SubmitHandler<FormFields> = async (user) => {
        const data = await createUser(user);
        if (data) {
            setUser({
                email: user.email,
                token: data.access_token,
            })
            navigate('/');
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-auto grid w-[350px] gap-6 lg:mt-0 mt-32 ">
                <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <p className="text-balance text-muted-foreground">
                        Enter your email below to login to your account
                    </p>
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            {...register('email')}
                            id="email"
                            type="text"
                            placeholder="m@example.com"
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            {/* <Link
                            to="/forgot-password"
                            className="ml-auto inline-block text-sm underline"
                        >
                            Forgot your password?
                        </Link> */}
                        </div>
                        <Input
                            {...register('password')}
                            id="password"
                            type="password" />
                        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                    </div>
                    <ReuseableLoading loading={isPending} type="submit" className="w-full" btnText="Login" />
                </div>

            </div>
        </form>
    )
}

export default Login