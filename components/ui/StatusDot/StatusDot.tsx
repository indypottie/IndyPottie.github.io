interface StatusDotProps {

    online?: boolean;

}

export default function StatusDot({

    online = true,

}: StatusDotProps){

    return(

        <div className="flex items-center gap-3">

            <div
                className={`h-3 w-3 rounded-full ${
                    online
                        ? "bg-green-500"
                        : "bg-red-500"
                }`}
            />

            <span>

                {online
                    ? "Available"
                    : "Unavailable"}

            </span>

        </div>

    );

}