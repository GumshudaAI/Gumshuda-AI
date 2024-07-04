from fastapi import HTTPException

def hybrid_scale(dense, sparse, alpha: float):
    if alpha < 0 or alpha > 1:
        raise HTTPException(status_code=400, detail="Alpha must be between 0 and 1")
    hsparse = {
        'indices': sparse['indices'],
        'values': [v * (1 - alpha) for v in sparse['values']]
    }
    hdense = [v * alpha for v in dense]
    return hdense, hsparse