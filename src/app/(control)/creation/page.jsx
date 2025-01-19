import Board from "@/components/board"
import CreateForm from "@/components/creatioForm"
import Dashboard from "@/components/dash"

export const metadata = {
    title: 'Creation',
}

export default function Creation() {
    return (
        <>
            <Dashboard>
              <CreateForm/>
            </Dashboard>
        </>
    )
}
