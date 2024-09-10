"use client"

import { FeatureOptionsType } from "@/lib/types/db.types"
import { useParams, useRouter } from "next/navigation"
import React, { useState, useEffect} from "react"
import { Button } from "@/components/ui/button"

const FeatureOption = () => {
    const [addFeature, setAddFeature] = useState<FeatureOptionsType[]>()
    const [featureOptions, setFeatureOptions] = useState<FeatureOptionsType[]>()
    const [selectedFeature, setSelectedFeature] = useState<FeatureOptionsType[]>()
    const params = useParams<{projectsid: string}>()
    const router = useRouter()

    return(
        <nav>
            <h1>Board</h1>
        </nav>
    )
}
export default FeatureOption